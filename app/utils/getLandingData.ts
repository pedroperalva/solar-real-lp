import fs from "fs";
import path from "path";

export async function getLandingData(locale: string) {
  const landingName = process.env.NEXT_PUBLIC_CONFIG;
  if (!landingName) {
    throw new Error("Variável NEXT_PUBLIC_CONFIG não definida");
  }

  const basePath = path.join(process.cwd(), "configs", landingName);

  // Importa config.js dinamicamente
  const configPath = path.join(basePath, "config.js");
  if (!fs.existsSync(configPath)) {
    throw new Error(`config.js não encontrado: ${configPath}`);
  }
  const configModule = await import(`@/configs/${landingName}/config.js`);
  const config = configModule.default;

  // Lê mensagens específicas do idioma
  const messagesPath = path.join(basePath, "messages", `${locale}.json`);
  if (!fs.existsSync(messagesPath)) {
    throw new Error(`Arquivo de mensagens não encontrado: ${messagesPath}`);
  }
  const messages = JSON.parse(fs.readFileSync(messagesPath, "utf-8"));

  return { config, messages };
}
