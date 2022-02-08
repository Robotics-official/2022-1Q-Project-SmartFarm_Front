int R = 2;

void setup()
{
 Serial.begin(9600); // serial communication reset
 pinMode(R, OUTPUT);
 digitalWrite(R, LOW);
}

void loop()
{
  Serial.println(" ** Watering System ReStart ** ");
  digitalWrite(R, LOW); // relay off + common situation
  while (1) {
    if (Serial.available()) {
      String inString = Serial.readStringUntil('\n');
      Serial.println(inString);
      if (inString== "WATER_ON") {
        digitalWrite(R, HIGH); // relay on + watering start
        delay(5000); //(for 5 Second)
        Serial.println( " ** Watering is Finished ** ");
        break;
      }
    }
  }
}
