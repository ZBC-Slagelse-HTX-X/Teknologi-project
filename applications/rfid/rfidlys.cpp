// Kode fra MFRC522
// Link til kode https://randomnerdtutorials.com/security-access-using-mfrc522-rfid-reader-with-arduino/


#include <SPI.h>
#include <MFRC522.h>
 
#define SS_PIN 5
#define RST_PIN 0
MFRC522 mfrc522(SS_PIN, RST_PIN);   // Create MFRC522 instance.
 
void setup() 
{
  Serial.begin(9600);   // Initiate a serial communication
  SPI.begin();      // Initiate  SPI bus
  mfrc522.PCD_Init();   // Initiate MFRC522
  Serial.println("Reader Started");
  Serial.println();
  pinMode(13, OUTPUT);
  pinMode(12, OUTPUT);
}
void loop() 
{
  // Look for new cards
  if ( ! mfrc522.PICC_IsNewCardPresent()) 
  {
    return;
  }
  // Select one of the cards
  if ( ! mfrc522.PICC_ReadCardSerial()) 
  {
    return;
  }
  //Show UID on serial monitor
  Serial.print("UID tag :");
  String content= "";
  byte letter;
  for (byte i = 0; i < mfrc522.uid.size; i++) 
  {
     Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ");
     Serial.print(mfrc522.uid.uidByte[i], HEX);
     content.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " "));
     content.concat(String(mfrc522.uid.uidByte[i], HEX));
  }
  Serial.println();
  Serial.print("Message : ");
  content.toUpperCase();
  if (content.substring(1) == "09 EB C4 C2") //change here the UID of the card/cards that you want to give access
  {
    Serial.println("Authorized access");
    Serial.println();
    digitalWrite(13, HIGH);  // turn the LED on (HIGH is the voltage level)
    delay(3000);                      // wait for three seconds
    digitalWrite(13, LOW);   // turn the LED off by making the voltage LOW
    delay(1000);
  }
 
 else   {
    Serial.println(" Access denied");
    digitalWrite(12, HIGH);  // turn the LED on (HIGH is the voltage level)
    delay(3000);                      // wait for three seconds
    digitalWrite(12, LOW);   // turn the LED off by making the voltage LOW
    delay(1000);
  }
} 