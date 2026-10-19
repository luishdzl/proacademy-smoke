import { e as createComponent, k as renderHead, r as renderTemplate, h as createAstro } from '../chunks/astro/server_BTSJ6vI4.mjs';
import 'piccolore';
import 'clsx';
import { neon } from '@neondatabase/serverless';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const envVars = [
    "DATABASE_URL",
    "DATABASE_URL_UNPOOLED",
    "SESSION_SECRET",
    "ADMIN_PASSWORD_HASH",
    "SMTP_USER",
    "SMTP_PASS",
    "UPLOAD_DIR"
  ];
  const envChecks = envVars.map((name) => ({
    label: name,
    ok: Boolean(process.env[name]),
    detail: process.env[name] ? "definida" : "FALTA"
  }));
  let dbCheck = { label: "Postgres: SELECT now()", ok: false, detail: "" };
  const startedAt = Date.now();
  try {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL no est\xE1 definida");
    const sql = neon(url);
    const rows = await sql`select now() as now, current_database() as db`;
    dbCheck = {
      label: "Postgres: SELECT now()",
      ok: true,
      detail: `${rows[0].now} (db: ${rows[0].db}, ${Date.now() - startedAt} ms)`
    };
  } catch (error) {
    dbCheck = {
      label: "Postgres: SELECT now()",
      ok: false,
      detail: error instanceof Error ? error.message : String(error)
    };
  }
  const checks = [...envChecks, dbCheck];
  const allOk = checks.every((c) => c.ok);
  const now = (/* @__PURE__ */ new Date()).toISOString();
  return renderTemplate`<html lang="es" data-astro-cid-j7pv25f6> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Proacademy · Smoke test</title>${renderHead()}</head> <body data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Proacademy · Smoke test</h1> <p data-astro-cid-j7pv25f6>Astro SSR + <code data-astro-cid-j7pv25f6>@astrojs/node</code> + Postgres externo (Neon), en Neubox.</p> <p class="status {allOk ? " ok" : "fail"}" data-astro-cid-j7pv25f6> ${allOk ? "OK" : "FALLA"} </p> <p data-astro-cid-j7pv25f6>Renderizado en el servidor: <code data-astro-cid-j7pv25f6>${now}</code> · Node <code data-astro-cid-j7pv25f6>${process.version}</code> · PID <code data-astro-cid-j7pv25f6>${process.pid}</code></p> <table data-astro-cid-j7pv25f6> <thead data-astro-cid-j7pv25f6> <tr data-astro-cid-j7pv25f6><th data-astro-cid-j7pv25f6>Comprobación</th><th data-astro-cid-j7pv25f6>Estado</th><th data-astro-cid-j7pv25f6>Detalle</th></tr> </thead> <tbody data-astro-cid-j7pv25f6> ${checks.map((c) => renderTemplate`<tr data-astro-cid-j7pv25f6> <td data-astro-cid-j7pv25f6><code data-astro-cid-j7pv25f6>${c.label}</code></td> <td class="pill {c.ok ? " ok" : "fail"}" data-astro-cid-j7pv25f6>${c.ok ? "OK" : "FALLA"}</td> <td data-astro-cid-j7pv25f6>${c.detail}</td> </tr>`)} </tbody> </table> <p style="margin-top:1.5rem; color:#6b7280; font-size:0.875rem;" data-astro-cid-j7pv25f6>
Si todo sale OK, el mismo stack que usa el proyecto real funciona en este hosting.
</p> </body></html>`;
}, "/home/luis/Documents/projects/proacademy-smoke/src/pages/index.astro", void 0);

const $$file = "/home/luis/Documents/projects/proacademy-smoke/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
