const size = {
    smallMobile: '320px',
    // MediumMobile: '375px',
    LargeMobile: '425px',
    tablet: '768px',
    laptop: '1024px',
    LargeLaptop: '1440px',
    desktop: '2560px'
  }

export const device = {
    smallMobile: `(min-width: ${size.smallMobile})`,
    // MediumMobile: `(min-width: ${size.MediumMobile})`,
    LargeMobile: `(min-width: ${size.LargeMobile})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    LargeLaptop: `(min-width: ${size.largeLaptop})`,
    desktop: `(min-width: ${size.desktop})`,
  };