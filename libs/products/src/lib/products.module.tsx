// eslint-disable-next-line @nx/enforce-module-boundaries
import {
    withReducer,
    AppStateFeatureKeysEnum,
} from '../../../shared/store/src/public_api';
import ProductsReducer from './store/products-active.reducer';
import { Products } from './products';

export function ProductsModule() {
    return (
        <Products />
    );
}

export default withReducer(AppStateFeatureKeysEnum.Products, ProductsReducer)(ProductsModule);
