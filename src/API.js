const availableTimesByDate = {
    "2024-05-22": ["10:00", "11:00", "12:00"],
    "2024-05-23": ["14:00", "15:00"],
    "2024-05-24": ["10:00", "11:00", "12:00"],
    "2024-05-25": ["14:00", "15:00", "16:00"],
    "2024-05-26": ["10:00", "11:00", "12:00"],
    "2024-05-27": ["14:00", "15:00", "16:00"],
    "2024-05-28": ["10:00", "11:00"],
    "2024-05-29": ["14:00", "15:00", "16:00"],
    "2024-05-30": ["10:00", "11:00", "12:00"],
    "2024-05-31": ["14:00", "15:00", "16:00"],
    "2024-06-01": ["10:00", "11:00", "12:00"],
    "2024-06-02": ["14:00", "15:00", "16:00"],
    "2024-06-03": ["10:00", "11:00"],
    "2024-06-04": ["14:00", "15:00", "16:00"],
    "2024-06-05": ["10:00", "11:00", "12:00"],
    "2024-06-06": ["14:00", "15:00", "16:00"],
    "2024-06-07": ["10:00", "11:00", "12:00"],
    "2024-06-08": ["14:00", "15:00",],
    "2024-06-09": ["10:00", "11:00", "12:00"],
    "2024-06-10": ["14:00", "15:00", "16:00"],
};

export function fetchAPI(date){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (availableTimesByDate[date]) {
          resolve(availableTimesByDate[date]);
        } else {
          reject(new Error("No available times for the selected date."));
        }
      }, 1000);
    });
};

export function submitAPI(formData){
    availableTimesByDate[formData.date.value] = availableTimesByDate[
      formData.date.value
    ].filter((time) => time !== formData.time.value);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          //console.log(formData)
          resolve(true);
        } else {
          reject(new Error("Form submission failed."));
        }
      }, 1000);
    });
};