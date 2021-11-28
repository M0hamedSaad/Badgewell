import React, { FC } from 'react';
import { Text as RNText, TextStyle } from 'react-native';
import { COLORS, FONTS, normalize } from '../../utils';

interface Props {
    numberOfLines?: number,
    center?: boolean,
    size?: number,
    style?: TextStyle,
    color?: string,
    type?: string
}
export const Text: FC<Props> = ({
    size = normalize(16),
    numberOfLines,
    center,
    style,
    children,
    color = COLORS.DARK,
    type = FONTS.REGULAR,
    ...props
}) => {
    let styles: TextStyle = {};

    if (size) {
        styles.fontSize = size;
    }
    if (color) {
        styles.color = color;
    }

    if (center) {
        styles.textAlign = 'center';
    }

    return (
        <RNText
            numberOfLines={numberOfLines}
            style={[
                {
                    fontFamily: type,
                    textAlign: 'left'
                },
                styles,
                style,
            ]}
            {...props}>
            {children}
        </RNText>
    );
};