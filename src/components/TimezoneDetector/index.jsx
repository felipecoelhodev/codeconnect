"use client";

import { useEffect } from "react";

/**
 * TIMEZONE DETECTOR
 *
 * Componente que detecta o timezone do usuário e salva em cookie
 * Deve ser incluído no layout principal para executar em todas as páginas
 */
export const TimezoneDetector = () => {
  useEffect(() => {
    const detectAndStoreTimezone = () => {
      try {
        // Detectar timezone do browser
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        if (!timezone) return;

        // Verificar se já existe o cookie com o mesmo valor
        const currentCookie = document.cookie
          .split("; ")
          .find((row) => row.startsWith("user_timezone="));

        const currentTimezone = currentCookie?.split("=")[1];

        // Só atualizar se for diferente ou não existir
        if (currentTimezone !== timezone) {
          // Salvar em cookie (expira em 365 dias)
          const expirationDate = new Date();
          expirationDate.setFullYear(expirationDate.getFullYear() + 1);

          document.cookie = `user_timezone=${timezone}; path=/; expires=${expirationDate.toUTCString()}; SameSite=Lax`;

          console.log("🌍 Timezone detectado e salvo:", timezone);
        }
      } catch (error) {
        console.error("Erro ao detectar timezone:", error);
      }
    };

    detectAndStoreTimezone();
  }, []);

  // Componente não renderiza nada
  return null;
};
