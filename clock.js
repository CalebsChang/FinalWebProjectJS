class DigitalClock {
    constructor(element) {
      this.element = element;
    }
    start() {
        this.update();
        setInterval(() => {
            this.update();
        }, 500)
    }
    update() {
      const parts = this.getTimeParts();
      const minFormat = parts.minute.toString().padStart(2,"0");
      const timeFormat = `${parts.hour}:${minFormat}`
      const amPm = parts.isAm ? "AM" : "PM"
  
      this.element.querySelector(".clock-time").textContent = timeFormat;
      this.element.querySelector(".clock-ampm").textContent = amPm;
    }
  
    getTimeParts() {
      const now = new Date();
      return {
        hour: now.getHours() % 12 || 12, 
        minute: now.getMinutes(),
        isAm: now.getHours() < 12
      }
    }
  }
  const clockElement = document.querySelector(".clock");
  const clockObj = new DigitalClock(clockElement);
  
  const disClock = clockObj.start()

export {disClock}