enum Laptop {
    Macbook(2000), XPS(1500), Lenovo(), HP(1200);

    private int price;

    private Laptop(int price) {
        this.price = price;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    private Laptop() {
        this.price = 500;
    }
}

public class Hello {

    public static void main(String args[]) {

        Laptop L[] = Laptop.values();
        for(Laptop item: L) {
            System.out.println(item + " : " + item.getPrice());
        }

    }
}
