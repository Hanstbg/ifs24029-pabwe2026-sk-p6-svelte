<script>
  import { useInput } from "../../../hooks/useInput.js";
  import { login } from "../states/authStore.js";
  import { navigate } from "../../../router.js";
  import { showErrorDialog } from "../../../helpers/toolsHelper.js";
  import Link from "../../common/components/Link.svelte";

  const { value: email } = useInput();
  const { value: password } = useInput();
  let busy = $state(false);

  async function submit(e) {
    e.preventDefault();
    busy = true;
    const r = await login($email, $password);
    busy = false;
    if (r.ok) navigate("/", { replace: true });
    else showErrorDialog(r.message);
  }
</script>

<form onsubmit={submit} class="space-y-4">
  <input type="email" placeholder="Email" required bind:value={$email} class="w-full border rounded-lg px-3 py-2" />
  <input type="password" placeholder="Kata sandi" required bind:value={$password} class="w-full border rounded-lg px-3 py-2" />
  <button disabled={busy} class="w-full bg-indigo-600 text-white rounded-lg py-2 font-semibold">
    {busy ? "Memproses..." : "Masuk"}
  </button>
  <p class="text-sm text-center">Belum punya akun? <Link href="/auth/register" class="text-indigo-600 font-semibold">Daftar</Link></p>
</form>
