package com.psl.gems.client;
import java.io.*;
import java.util.ArrayList;
import java.util.Collections;

public class TestClient {
	static String[] suits = { "CLUB", "DIAMOND", "HEART", "SPADE" };
	static String[] ranks= {"TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "JACK", "QUEEN", "KING", "ACE"};

	
	public static class Game {
		 ArrayList<String> players= new ArrayList<>();

		Game() {

		}

		public void register(String name) {
			this.players.add(name);

		}
		
		public void play() throws Exception	{
			
			ArrayList<Integer> cards=new ArrayList<>();
			for(int i=0; i<52; i++) cards.add(i);
			System.out.println(cards);
			Collections.shuffle(cards);
			System.out.println(cards);

			
			
			System.out.println("Player One Cards");
			int player1=0;
			int player2=0;
			for(int i=0; i<3; i++) {
				System.out.println(findCardName(cards.get(i))+" "+findScore(cards.get(i)));
				player1= Math.max(player1,findScore(cards.get(i)));
			}

			System.out.println("Player Two Cards");
			for(int i=3; i<6; i++) {
				System.out.println(findCardName(cards.get(i))+" "+findScore(cards.get(i)));
				player2= Math.max(player2,findScore(cards.get(i)));
			}
			
			if(player1>player2) System.out.println("Player One Won!");
			else System.out.println("Player Two Won!");
			
			FileWriter writer = new FileWriter("D:\\cardgame.html");  
		    BufferedWriter buffer = new BufferedWriter(writer);  
		    buffer.write("<!DOCTYPE html> \r\n"
		    		+ "<html lang=\"en\"> \r\n"
		    		+ "<head> \r\n"
		    		+ " <title>Document</title> \r\n"
		    		+ "</head> \r\n"
		    		+ "<body> \r\n"
		    		+ " <section> \r\n"
		    		+ " <div id=\""+this.players.get(0)+"\"> \r\n"
		    		+ " <div data-card=\""+findCardName(cards.get(0))+"\" /> \r\n"
		    		+ " <div data-card=\""+findCardName(cards.get(1))+"\" /> \r\n"
		    		+ " <div data-card=\""+findCardName(cards.get(2))+"\" /> \r\n"
		    		+ " </div> \r\n"
		    		+ " <div id=\""+this.players.get(1)+"\"> \r\n"
		    		+ " <div data-card=\""+findCardName(cards.get(3))+"\" /> \r\n"
		    		+ " <div data-card=\""+findCardName(cards.get(4))+"\" /> \r\n"
		    		+ " <div data-card=\""+findCardName(cards.get(5))+"\" /> \r\n"
		    		+ " </div> \r\n"
		    		+ " </section> \r\n"
		    		+ "</body> ");  
		    buffer.close();  
		    System.out.println("Success");
		    
		    
		}
		
//		public void outputHTML() {
//			File htmlTemplateFile= new File("D:\\Persistent Assignment\\cardgame.html");
//			String htmlString= FileUtils.readFileToString(htmlTemplateFile);
//		}
		
		public String findCardName(int num) {
			int suit= num/13;
			int rank= num%13-1;
			if(rank==-1) {
				suit--;
				rank=12;
			}
			return(suits[suit]+"-"+ranks[rank]);
		}
		
		public int findScore(int num) {
			int suit= num/13;
			int rank= num%13-1;
			if(rank==-1) {
				suit--;
				rank=12;
			}
			return(rank*4+suit);
		}
	}

	public static void main(String[] args)throws Exception {
		// TODO Auto-generated method stub
		InputStreamReader isr = new InputStreamReader(System.in);
		BufferedReader br= new BufferedReader(isr);
		Game game= new Game();
		System.out.println("Register Players");
		System.out.println("Enter Player 1 Name");
		game.register(br.readLine());
		System.out.println("Enter Player 2 Name");
		game.register(br.readLine());

		game.play();
	}

}
