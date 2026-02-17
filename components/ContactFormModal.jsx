"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./ContactFormModal.css";
import { useLanguage } from "@/context/LanguageContext";

/**
 * ContactFormModal Component
 * Popup form for contact/estimation requests
 * Fields: Nom prénom, email, téléphone, adresse postale, nombre de pièces
 */
const ContactFormModal = ({ isOpen, onClose, title }) => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    rooms: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Use translated title if not provided
  const modalTitle = title || t("contactForm.title");

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          address: "",
          rooms: "",
        });
        setErrors({});
        setSubmitSuccess(false);
      }, 300);
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = t("contactForm.errors.fullNameRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contactForm.errors.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("contactForm.errors.emailInvalid");
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t("contactForm.errors.phoneRequired");
    } else if (!/^[\d\s+()-]{10,}$/.test(formData.phone)) {
      newErrors.phone = t("contactForm.errors.phoneInvalid");
    }

    if (!formData.address.trim()) {
      newErrors.address = t("contactForm.errors.addressRequired");
    }

    if (!formData.rooms.trim()) {
      newErrors.rooms = t("contactForm.errors.roomsRequired");
    } else if (!/^\d+$/.test(formData.rooms) || parseInt(formData.rooms) < 1) {
      newErrors.rooms = t("contactForm.errors.roomsInvalid");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send data to local API route (which will forward to your email API)
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          adressePostal: formData.address,
          NbrPieces: formData.rooms,
        }),
      });

      const result = await response.json();

      if (result.success) {
        console.log("✅ Email sent successfully!", result);
        setSubmitSuccess(true);

        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        throw new Error(result.error || t("contactForm.errors.submitError"));
      }
    } catch (error) {
      console.error("❌ Submission error:", error);
      setErrors({ submit: t("contactForm.errors.submitError") });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="contact-modal-backdrop" onClick={handleBackdropClick}>
      <div className="contact-modal">
        <button
          className="modal-close-button"
          onClick={onClose}
          aria-label={t("contactForm.close")}
          type="button"
        >
          &times;
        </button>

        <div className="modal-header">
          <h2 className="modal-title">{modalTitle}</h2>
          <p className="modal-subtitle">{t("contactForm.subtitle")}</p>
        </div>

        {submitSuccess ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>{t("contactForm.success.title")}</h3>
            <p>{t("contactForm.success.message")}</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">
                {t("contactForm.fullName")}{" "}
                <span className="required">{t("contactForm.required")}</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={errors.fullName ? "error" : ""}
                placeholder={t("contactForm.placeholders.fullName")}
              />
              {errors.fullName && (
                <span className="error-message">{errors.fullName}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">
                {t("contactForm.email")}{" "}
                <span className="required">{t("contactForm.required")}</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
                placeholder={t("contactForm.placeholders.email")}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                {t("contactForm.phone")}{" "}
                <span className="required">{t("contactForm.required")}</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? "error" : ""}
                placeholder={t("contactForm.placeholders.phone")}
              />
              {errors.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="address">
                {t("contactForm.address")}{" "}
                <span className="required">{t("contactForm.required")}</span>
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={errors.address ? "error" : ""}
                placeholder={t("contactForm.placeholders.address")}
                rows="3"
              />
              {errors.address && (
                <span className="error-message">{errors.address}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="rooms">
                {t("contactForm.rooms")}{" "}
                <span className="required">{t("contactForm.required")}</span>
              </label>
              <input
                type="number"
                id="rooms"
                name="rooms"
                value={formData.rooms}
                onChange={handleChange}
                className={errors.rooms ? "error" : ""}
                placeholder={t("contactForm.placeholders.rooms")}
                min="1"
              />
              {errors.rooms && (
                <span className="error-message">{errors.rooms}</span>
              )}
            </div>

            {errors.submit && (
              <div className="form-error-message">{errors.submit}</div>
            )}

            <div className="form-actions">
              <button
                type="button"
                className="btn-secondary"
                onClick={onClose}
                disabled={isSubmitting}
              >
                {t("contactForm.cancel")}
              </button>
              <button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? t("contactForm.submitting")
                  : t("contactForm.submit")}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>,
    document.body,
  );
};

export default ContactFormModal;
