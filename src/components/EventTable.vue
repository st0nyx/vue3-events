<template>
  <h1>Vue 3 - Events</h1>
  <table class="mail-table">
    <tbody>
      <tr v-for="event in events" :key="event.id">
        <td>
          {{ event.date }}
        </td>
        <td>
          {{ event.title }}
        </td>
        <td>
          {{ event.description }}
        </td>
        <td>
          {{ event.location }}
        </td>
        <td>
          {{ event.organizer }}
        </td>
        <td>
          {{ event.category }}
        </td>
        <td>
          {{ event.published }}
        </td>
        <td>
          <button @click="event.published = !event.published">
            Toggle Published
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { ref } from "vue";
export default {
  async setup() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return {
      events: ref([
        {
          id: 1,
          title: "Beach Cleanup",
          date: "Aug 28 2018",
          time: "10:00",
          location: "Daytona Beach, South Beach Road",
          description: "Let's clean up this beach and do some good.",
          organizer: "Adam Jahr",
          category: "sustainability",
          published: true,
          attendees: [
            {
              id: "abc123",
              name: "Adam Jahr"
            },
            {
              id: "def456",
              name: "Gregg Pollack"
            },
            {
              id: "ghi789",
              name: "Beth Swanson"
            },
            {
              id: "jkl101",
              name: "Mary Gordon"
            }
          ]
        },
        {
          id: 2,
          title: "Park Cleanup",
          date: "Nov 12 2018",
          time: "12:00",
          location: "132 N Magnolia Street, Orlando, Florida",
          description: "We're going to clean up this park.",
          organizer: "Adam Jahr",
          category: "nature",
          published: true,
          attendees: [
            {
              id: "ghi789",
              name: "Beth Swanson"
            },
            {
              id: "jkl101",
              name: "Mary Gordon"
            }
          ]
        },
        {
          id: 3,
          title: "Pet Adoption Day",
          date: "Dec 2 2018",
          time: "12:00",
          location: "132 N Magnolia Street, Orlando, Florida",
          description: "Help animals find new homes.",
          organizer: "Gregg Pollack",
          category: "animal welfare",
          published: true,
          attendees: [
            {
              id: "abc123",
              name: "Adam Jahr"
            },
            {
              id: "ghi789",
              name: "Beth Swanson"
            },
            {
              id: "jkl101",
              name: "Mary Gordon"
            }
          ]
        }
      ])
    };
  },
  computed: {
    publishedEvents() {
      return this.events.filter(e => e.published);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* Global Styles */
button {
  font-size: 16px;
  padding: 8px;
  border-radius: 3px;
  margin: 5px 10px 5px 0px;
  cursor: pointer;
}
button:disabled {
  cursor: auto;
}
button.selected {
  cursor: auto;
  color: black;
  border-color: black;
  border-width: 2px;
}
.clickable {
  cursor: pointer;
}
input[type="checkbox"] {
  -webkit-appearance: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 2px;
  border: 1px solid #555;
  position: relative;
  vertical-align: middle;
  padding: 10px;
}
input[type="checkbox"].partial-check {
  background: #abc;
}
input[type="checkbox"]:checked {
  background: #679;
}
.mb-0 {
  margin-bottom: 0;
}
/* Modal */
.modal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
.overlay {
  opacity: 0.5;
  background-color: black;
}
.modal-card {
  position: relative;
  max-width: 80%;
  margin: auto;
  margin-top: 30px;
  padding: 20px;
  background-color: white;
  min-height: 500px;
  z-index: 10;
  opacity: 1;
}
/* Email Modal */
.email-display {
  text-align: left;
}
/* Mail Table */
.mail-table {
  max-width: 1000px;
  margin: auto;
  border-collapse: collapse;
}
.mail-table tr.read {
  background-color: #eee;
}
.mail-table tr {
  height: 40px;
}
.mail-table td {
  border-bottom: 1px solid black;
  padding: 5px;
  text-align: left;
}
.mail-table tr:first-of-type td {
  border-top: 1px solid black;
}
.mail-table td p {
  max-height: 1.2em;
  overflow-y: hidden;
  margin: 0;
}
.mail-table td.date {
  width: 120px;
}
/* Bulk Action Bar */
.bulk-action-bar {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  text-align: left;
  padding-bottom: 8px;
}
.bulk-action-bar input {
  margin: 5px;
}
.bulk-action-bar .checkbox {
  margin-right: 6px;
  margin-left: 3px;
}
</style>
