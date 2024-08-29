enum Laptop {
    Macbook(price: 2000), XPS(price: 1500), Lenovo(price: 1800), HP(price: 1200);

    private int price;

    private Laptop(int price) {
        this.price = price;
    }

    private Laptop() {
        this.price = 500;
    }
}

public class Hello {

    public static void main(String args[]) {

        Laptop L[] = Laptop.values();

    }
}
