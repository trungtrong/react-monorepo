// eslint-disable-next-line @nx/enforce-module-boundaries
import { Button } from './../../../shared/ui/src/ui';

export function Products() {
  return (
    <div className="p-1 m-1px bg-primary-50 truncate button-red">
      <h1>Welcome to Products!</h1>
      <Button>Open Popup</Button>
    </div>
  );
}

export default Products;
