import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, image, url }) => {
    const siteTitle = 'Sano Rodrigue — Fullstack Engineer';
    const defaultDescription = 'Sano Rodrigue is a fullstack engineer from Kigali, Rwanda. He builds React frontends, Node.js APIs, and complete web products, from idea to deployment.';
    const siteUrl = 'https://sanorodrigue.dev';

    return (
        <Helmet>
            <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || siteUrl} />
            <meta property="og:title" content={title || siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            {image && <meta property="og:image" content={image} />}

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url || siteUrl} />
            <meta property="twitter:title" content={title || siteTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            {image && <meta property="twitter:image" content={image} />}
        </Helmet>
    );
};
