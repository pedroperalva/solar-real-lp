import fs from "fs";
import path from "path";

export function getLandingData(locale: string) {
  const landingName = process.env.NEXT_PUBLIC_CONFIG;
  if (!landingName) {
    throw new Error("Variável NEXT_PUBLIC_CONFIG não definida");
  }

  const basePath = path.join(process.cwd(), "configs", landingName);

  // Lê config.json
  const configPath = path.join(basePath, "config.json");
  if (!fs.existsSync(configPath)) {
    throw new Error(`config.json não encontrado: ${configPath}`);
  }
  const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));

  // Lê mensagens específicas do idioma
  const messagesPath = path.join(basePath, "messages", `${locale}.json`);
  if (!fs.existsSync(messagesPath)) {
    throw new Error(`Arquivo de mensagens não encontrado: ${messagesPath}`);
  }
  const messages = JSON.parse(fs.readFileSync(messagesPath, "utf-8"));

  return { config, messages };
}
