// eslint-disable-next-line @nx/enforce-module-boundaries
import { SvgSpinner } from './../../../../assets/src/svg-icons';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ICommonProps } from '../../../../core/src/models';
import classNames from 'classnames';
import { ElementType, forwardRef, memo, useMemo } from 'react';

export interface ISpinnerProps extends ICommonProps {
    colorClass?: string;
    indicator?: ElementType;
    isSpinning?: boolean;
    size?: string | number;
}

const Spinner = forwardRef((props: ISpinnerProps, ref) => {
    const {
        className,
        colorClass,
        indicator: Component = SvgSpinner,
        isSpinning,
        size = 20,
        style,
        ...rest
    } = props;


    const spinnerStyle = useMemo(() => {
        return {
            width: size,
            ...style,
        }
    }, [size, style])

    return (
        <Component
            ref={ref}
            style={spinnerStyle}
            className={classNames(
                isSpinning && 'animate-spin',
                colorClass,
                className
            )}
            {...rest}
        />
    )
})

export default memo(Spinner);
