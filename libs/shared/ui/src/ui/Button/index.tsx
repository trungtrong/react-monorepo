import type { MouseEvent } from 'react';
import { forwardRef } from 'react';

import styles from './index.module.css';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ICommonProps } from '../../../../core/src/models';

export interface ButtonProps extends ICommonProps {
    disabled?: boolean;
    title?: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { children, className, disabled = false, title, ...rest } = props;
    //
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const { onClick } = props;
        if (disabled) {
            e.preventDefault();
            return;
        }
        onClick?.(e);
    };

    return (
        <button
            ref={ref}
            className={className}
            title={title ?? ''}
            data-disabled={disabled}
            onClick={handleClick}
            {...rest}
        >
            {/* <ButtonGlobalStyle $disabled={disabled}/> */}
            <ButtonContainer
                $disabled={disabled}
                className={styles['button-container']}
                // className={`${styles['button-container']} truncate`}
                data-disabled={disabled}
            >
                {children}
            </ButtonContainer>

            <ButtonContainer2
                disabled={disabled}
                className={styles['button-container']}
                // className={`${styles['button-container']} truncate`}
                data-disabled={disabled}
            >
                {children}
            </ButtonContainer2>
        </button>
    );
});

export default Button;
