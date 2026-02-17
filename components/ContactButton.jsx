"use client";

import React, { useState } from "react";
import ContactFormModal from "./ContactFormModal";

/**
 * ContactButton — Minimal client component that wraps the estimation button + modal.
 * Extracted so parent sections can remain server components.
 */
const ContactButton = ({
  label,
  modalTitle,
  className = "estimation-button",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button className={className} onClick={() => setIsModalOpen(true)}>
        {label}
      </button>
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
      />
    </>
  );
};

export default ContactButton;
