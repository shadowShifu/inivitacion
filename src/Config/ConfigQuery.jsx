const size = {
    mobileS: '200px',
    mobileXS: '280px',
    mobileM: "360px",
    mobileXM: "400px",
    mobileL: "450px",
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

  export const device = {
    mobileS: `screen and (max-width: ${size.mobileS})`,
    mobileXS: `screen and (max-width: ${size.mobileXS})`,
    mobileM: `screen and (max-width: ${size.mobileM})`,
    mobileXM: `screen and (max-width: ${size.mobileXM})`,
    mobileL: `screen and (max-width: ${size.mobileL})`,
    tablet: `screen and (max-width: ${size.tablet})`,
    laptop: `screen and (max-width: ${size.laptop})`,
    laptopL: `screen and (max-width: ${size.laptopL})`,
    desktop: `screen and (max-width: ${size.desktop})`,
    desktopL: `screen and (max-width: ${size.desktop})`
  };