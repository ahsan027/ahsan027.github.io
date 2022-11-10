import java.util.Scanner;
public class file{
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        System.out.print("How many numbers do you want to add?: ");
        int num = scan.nextInt();
        for(int nums = 1;nums <= num ;nums++){
            for(int numsOne = 1; numsOne <= nums; numsOne++){
                System.out.print("*");
                
            }
            System.out.println(" ");
        }
        
    }
}