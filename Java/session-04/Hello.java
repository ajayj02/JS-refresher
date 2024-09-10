//annotations

@FunctionalInterface
interface A {
    void show(int i);
}

// class B implements A {
//     public void show(int i) {
//         System.out.println("Hi it is : " + i);
//     }
// }

public class Hello {

    public static void main(String args[]) {
        
        A obj = (i) -> 
        System.out.println("Printing... " + i);

        obj.show(5);
    }
}
