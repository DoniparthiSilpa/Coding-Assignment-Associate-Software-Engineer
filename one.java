1. JAVA 


import java.util.Random;

public class JavaProgram { 
    public static void main(String[] args) {
        // A. Shuffle an array
        int[] array = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(array);
        System.out.println("Shuffled Array: ");
        for (int num : array) {
            System.out.print(num + " ");
        }
        System.out.println();

        // B. Convert Roman numeral to integer
        String romanNumeral = "IX";
        int result = convertRomanToInteger(romanNumeral);
        System.out.println("Converted Integer: " + result);

        // C. Check if input is a pangram
        String input = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = checkPangram(input);
        System.out.println("Is Pangram? " + isPangram);
    }

    public static void shuffleArray(int[] array) {
        Random random = new Random();
        for (int i = array.length - 1; i > 0; i--) {
            int j = random.nextInt(i + 1);
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    public static int convertRomanToInteger(String romanNumeral) {
        // logic for converting Roman numeral to integer goes here
    
        return 0;
    }

    public static boolean checkPangram(String input) {
        //  logic for checking if input is a pangram goes here
      
        return false;
    }
}