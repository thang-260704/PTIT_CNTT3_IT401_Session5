(() => {
    type Product = {
        id: string;
        name: string;
        price: number;
        category: { id: string; name: string };
        discount?: number;
    };

    const listProduct: Product[] = [
        {
            id: "P003",
            name: "Sách học TypeScript",
            price: 180000,
            category: { id: "C3", name: "Sách" },
            discount: 0.2,
        },
        {
            id: "P001",
            name: "Áo thun nam",
            price: 250000,
            category: { id: "C1", name: "Thời trang" },
            discount: 0.1,
        },
        {
            id: "P002",
            name: "Tai nghe Bluetooth",
            price: 1200000,
            category: { id: "C2", name: "Điện tử" },
        },
    ];

    function getFinalPrice(product: Product): number {
        return product.discount ? product.price - (product.price * product.discount) : product.price;
    }

    function printProductInfo(product: Product): void {
        const finalPrice = getFinalPrice(product);
        console.log(`Danh muc: ${product.category.name}`);
        console.log(`Ten: ${product.name}`);
        console.log(`Gia goc: ${product.price}`);
        console.log(`Gia sau giam: ${finalPrice}`);
    }

    printProductInfo(listProduct[2]);
})();