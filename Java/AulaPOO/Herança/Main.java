package AulaPOO.Herança;

import java.util.Scanner;

public class Main {
    public static void testVertebrado(Vertebrado v){
        System.out.println(v.toString());
    }
    public static void main(String[] args) {
        Scanner Keyboard = new Scanner(System.in);
        String ser;
        Vertebrado v = new Vertebrado();
        ser = Keyboard.next().toUpperCase();
        while(!ser.equals("F")){
            if(ser.equals("H")){
                v = new Homem();
                System.out.println(v.toString());
            }
            if(ser.equals("S")){
                v = new Sapo();
                System.out.println(v.toString());
            }
            if(ser.equals("C")){
                v = new Coruja();
                System.out.println(v.toString());
            }
            if(ser.equals("G")){
                v = new Galo();
                System.out.println(v.toString());
            }
            if(ser.equals("L")){
                v = new Lobo();
                System.out.println(v.toString());
            }
            testVertebrado(v);
            ser = Keyboard.next().toUpperCase();
        }
    }
      
}

