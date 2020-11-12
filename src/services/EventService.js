import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
  getEvent(id) {
    return apiClient.get("events/" + id);
  },
  putEvents(event) {
    return apiClient.put(`http://localhost:3000/events/${event.id}`, event);
  },
  postEvent(event) {
    return apiClient.post("/events", event);
  }
};
