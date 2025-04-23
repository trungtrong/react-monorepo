import type { MouseEvent } from 'react';
import { forwardRef } from 'react';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { ICommonProps } from './../../../../core/src/models';

export interface ISearchInputProps extends ICommonProps {
    disabled?: boolean;
    title?: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const SearchInput = forwardRef<HTMLButtonElement, ISearchInputProps>((props, ref) => {
    return (
        <div></div>
    );
});

export default SearchInput;
