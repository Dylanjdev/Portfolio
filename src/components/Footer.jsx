import React from "react";

export default function Footer() {
  return (
    <footer className="glass py-6 mt-24 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} Dylan Smith. All rights reserved.
    </footer>
  );
}
