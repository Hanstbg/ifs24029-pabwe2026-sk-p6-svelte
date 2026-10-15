<script>
  import { useInput } from "../../../hooks/useInput.js";
  import { register } from "../states/authStore.js";
  import { navigate } from "../../../router.js";
  import { showErrorDialog, showSuccessDialog } from "../../../helpers/toolsHelper.js";
  import Link from "../../common/components/Link.svelte";

  const { value: name } = useInput();
  const { value: email } = useInput();
  const { value: password } = useInput();
  let busy = $state(false);

  async function submit(e) {
    e.preventDefault();
    busy = true;
    const r = await register($name, $email, $password);
    busy = false;
    if (r.ok) {
      await showSuccessDialog("Akun dibuat, silakan masuk.");
      navigate("/auth/login");
    } else showErrorDialog(r.message);
  }
</script>

<form onsubmit={submit} class="space-y-4">
  <input placeholder="Nama" required bind:value={$name} class="w-full border rounded-lg px-3 py-2" />
  <input type="email" placeholder="Email" required bind:value={$email} class="w-full border rounded-lg px-3 py-2" />
  <input type="password" placeholder="Kata sandi" required bind:value={$password} class="w-full border rounded-lg px-3 py-2" />
  <button disabled={busy} class="w-full bg-indigo-600 text-white rounded-lg py-2 font-semibold">
    {busy ? "Memproses..." : "Daftar"}
  </button>
  <p class="text-sm text-center">Sudah punya akun? <Link href="/auth/login" class="text-indigo-600 font-semibold">Masuk</Link></p>
</form>
