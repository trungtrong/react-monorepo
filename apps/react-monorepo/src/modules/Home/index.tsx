// eslint-disable-next-line @nx/enforce-module-boundaries
import environment from '../../../../../libs/shared/core/src/environments';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
    useAppDispatch,
    useAppSelector,
    CounterSelector,
    CounterActions,
} from './../../../../../libs/shared/store/src/public_api';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Button } from './../../../../../libs/shared/ui/src/ui';

const Home = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(CounterSelector.selectCount);

    return (
        <div>
            <h1 className="bg-primary-100 m-0.5">
                Welcome react-store {environment.ENV_NAME}
            </h1>

            <div>
                <Button
                    aria-label="Decrement value"
                    onClick={() => dispatch(CounterActions.decrement())}
                >
                    Decrease
                </Button>
                <span aria-label="Count">{count}</span>
                <Button
                    aria-label="Increment value"
                    onClick={() => dispatch(CounterActions.increment())}
                >
                    Increase
                </Button>
            </div>
        </div>
    );
};

export default Home;
