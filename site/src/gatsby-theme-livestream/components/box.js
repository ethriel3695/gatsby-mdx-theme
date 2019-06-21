import React from 'react';
import { colors } from 'gatsby-theme-livestream';

export default ({ children }) => (
    <div style={{
        padding: '4rem',
        background: colors.primary
    }}>
    <h2>Hey! This is important!</h2>
    {children}
    </div>
);