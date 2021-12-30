import React, { useCallback, useDebugValue, useEffect, useState } from 'react'
import { View, StatusBar, Image, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, Keyboard, Platform, ScrollView } from "react-native"
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { Colors, Images, Fonts } from 'src/utils'
import styles from './styles'
import Moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';



const SelectTimeAndDate = () => {
  let navigation = useNavigation()
  const today = Moment().format('YYYY-MM-DD');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [amPm, setAmPm] = useState(false);

  let date = new Date();

  const showDatePicker = () => {
  setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    console.log(date)
    hideDatePicker();
  };

  let hours = date.getHours() % 12;
  let minutes = date.getMinutes();

  useEffect(() => {
   if(date.getHours < 12){
      setAmPm("AM")
    }
    else{
      setAmPm("PM")
    }
  },[])




  return (
    <View style={{ flex: 1, backgroundColor: Colors.white, }}>
      <StatusBar translucent={false}
        barStyle={"dark-content"}
        backgroundColor={Colors.white} />
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: "row", height: "100%", marginTop: Platform.OS === 'android' ? 0 : 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}
            style={{ width: "15%", height: "100%", justifyContent: "center", alignItems: "center", }}>
            <Image source={Images.LeftArrow} style={{ width: 7, height: 14, tintColor: Colors.black }} resizeMode={"contain"} />
          </TouchableOpacity>
          <View style={{ flex: 1, height: "100%", justifyContent: "center", }}>
            <Text style={styles.headerTxt}>Select Time & Date</Text>
          </View>
          <View style={{ width: "15%", height: "100%", justifyContent: "center", alignItems: "center", }}>
          </View>

        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flex: 1, }}>
        <View style={{ height: "20%", marginTop: 30 }}>
          <Text style={styles.selectDateTxt}>Select Time</Text>
          <View style={{ height: "80%", justifyContent: "center", marginHorizontal: 20 }}>
            <TouchableOpacity onPress={() => showDatePicker()}
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
              <View style={{ height: 60, width: 81, backgroundColor: Colors.sky, justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                <Text style={[styles.selectDateTxt, { color: Colors.white }]}>{hours}</Text>

              </View>

              <View style={{justifyContent:"center",}}>
                <View style={{height:5 , width:5 , borderRadius:4,borderWidth:1, backgroundColor:Colors.sky , borderColor:Colors.sky}}></View>
                <View style={{height:5 , width:5 , borderRadius:4,borderWidth:1, backgroundColor:Colors.sky , borderColor:Colors.sky, marginVertical:8}}></View>
              </View>
              <View style={{ height: 60, width: 81, backgroundColor: Colors.sky, justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                <Text style={[styles.selectDateTxt, { color: Colors.white }]}>{minutes}</Text>

              </View>
              <View style={{ height: 60, width: 81, backgroundColor: Colors.sky, justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                <Text style={[styles.selectDateTxt, { color: Colors.white }]}>{amPm}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="time"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
        
          />
        </View>
        <View>
          <Text style={styles.selectDateTxt}>Select Date</Text>
          <Text style={styles.currentDate}>
            {Moment(new Date().toDateString()).format("D MMM YYYY")}
          </Text>
          <View style={{ marginTop: -20, }}>


            <Calendar
              hideExtraDays={true}
              enableSwipeMonths={true}
              hideArrows={true}
              hideDayNames={true}
              hideExtraDays={true}
              markedDates={{
                [today]: { selected: true, selectedColor: Colors.sky },
              }}
              theme={{
                textSectionTitleColor: Colors.black,
                dayTextColor: Colors.black,
                textDayFontWeight: "500",
                textDayFontFamily: Fonts.Regular,
                textDayFontSize: 16,
                todayTextColor: Colors.black,
                monthTextColor: Colors.transparent,
                // contentContainerStyle:{backgroundColor:"red"},
                // style:{backgroundColor:"red"},
                calendarBackground: "rgba(62, 186, 255, 0.12)",
              }}
              style={{ backgroundColor: Colors.transparent, marginHorizontal: 0 }}

            />
          </View>



        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate("AddPaymentMethod")}
        style={{ height: 48, backgroundColor: Colors.sky, borderRadius: 6, justifyContent: "center", position: "absolute", bottom: 50, width: "90%", alignSelf: "center" }}>
        <Text style={styles.continueBtn}>Done</Text>
      </TouchableOpacity>




    </View>

  )
}

export default SelectTimeAndDate
