import React from "react";
import { lightTheme, darkTheme } from "./src/utils/theme";
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// XSS our own site
const DarkModeScript = () => {
  let codeToRunOnClient = `
(function() {
  function getInitialColorMode() {
    const persistedColorPreference =
    window.localStorage.getItem('color-mode');

    const hasPersistedPreference =
    typeof persistedColorPreference === 'string';

    if (hasPersistedPreference) {
      return persistedColorPreference;
    }

    return 'light';
  }
  const colorMode = getInitialColorMode();
  const root = document.documentElement;
  root.style.setProperty(
    '--color-body',
    colorMode === 'light'
      ? '${lightTheme.body}'
      : '${darkTheme.body}'
  );
  
  root.style.setProperty(
    '--color-toggleBorder',
    colorMode === 'light'
      ? '${lightTheme.toggleBorder}'
      : '${darkTheme.toggleBorder}'
  );
  root.style.setProperty(
    '--color-gradient',
    colorMode === 'light'
      ? '${lightTheme.gradient}'
      : '${darkTheme.gradient}'
  );

  root.style.setProperty(
    '--color-home-border',
    colorMode === 'light'
      ? '${lightTheme.border}'
      : '${darkTheme.border}'
  );

  root.style.setProperty(
    '--color-contributionCircle',
    colorMode === 'light'
      ? '${lightTheme.contributionCircle}'
      : '${darkTheme.contributionCircle}'
  );

  root.style.setProperty(
    '--color-contributionContent',
    colorMode === 'light'
      ? '${lightTheme.contributionContent}'
      : '${darkTheme.contributionContent}'
  );
  root.style.setProperty('--initial-color-mode', colorMode);
})()`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<DarkModeScript />);
};
