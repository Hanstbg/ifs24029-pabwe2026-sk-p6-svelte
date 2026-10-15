import Swal from "sweetalert2";

export const showSuccessDialog = (text) => Swal.fire({ icon: "success", title: "Berhasil", text });
export const showErrorDialog = (text) => Swal.fire({ icon: "error", title: "Gagal", text });
export const showWarningDialog = (text) => Swal.fire({ icon: "warning", title: "Peringatan", text });
export async function showConfirmDialog(text) {
  const r = await Swal.fire({
    icon: "question", title: "Konfirmasi", text,
    showCancelButton: true, confirmButtonText: "Ya", cancelButtonText: "Batal",
  });
  return r.isConfirmed;
}

export function formatDate(value) {
  if (!value) return "-";
  return new Date(value).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}
