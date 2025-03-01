import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css"; // AOS animations
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import Sidebar from "../components/Sidebar";
import "./ProductListing.css";

// Interface for an Event type
interface Event {
  eventId: string;
  title: string;
  description: string;
  imageUrl: string;
  isPrivate?: boolean;
}

const EventListing: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Test events
  const events: Event[] = [
    {
      eventId: "1",
      title: "Community Rally",
      description:
        "Join us for a rally in support of local environmental initiatives.",
      imageUrl: "https://picsum.photos/seed/rally/400/300",
      isPrivate: false,
    },
    {
      eventId: "2",
      title: "Food Drive Extravaganza",
      description:
        "Help us collect food for the needy. Your donation can make a difference!",
      imageUrl: "https://picsum.photos/seed/fooddrive/400/300",
      isPrivate: false,
    },
    {
      eventId: "3",
      title: "Charity Marathon",
      description:
        "Run for a cause! Participate in our marathon to support community programs.",
      imageUrl: "https://picsum.photos/seed/marathon/400/300",
      isPrivate: true,
    },
    {
      eventId: "4",
      title: "Neighborhood Cleanup",
      description:
        "Gather together to clean and beautify our local parks and streets.",
      imageUrl: "https://picsum.photos/seed/cleanup/400/300",
      isPrivate: false,
    },
    {
      eventId: "5",
      title: "Book Donation Drive",
      description:
        "Donate books to help spread literacy in underprivileged communities.",
      imageUrl: "https://picsum.photos/seed/books/400/300",
      isPrivate: false,
    },
  ];

  const handleCardClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const closeEventModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div>
      {/* Sidebar rendered on the left */}
      <Sidebar />

      {/* Main content container offset to prevent overlapping with the sidebar */}
      <div
        style={{
          marginLeft: "200px",
          width: "calc(100% - 200px)",
          backgroundColor: "#fcf7ed",
        }}
      >
        {/* Header */}
        <div className="container">
          <div
            className="row align-items-center mb-4"
            style={{ paddingTop: "60px" }}
          >
            <div className="col-12 text-center">
              <h1 style={{ fontWeight: "bold", color: "#4d7a57" }}>
                Act Now
              </h1>
              <p style={{ color: "#4d7a57" }}>
                Explore local activism initiatives—from rallies to food drives
              </p>
            </div>
          </div>
        </div>

        {/* Render Events */}
        <div
          className="row justify-content-around mt-5 d-flex flex-wrap"
          style={{
            width: "100%",
            justifyContent: "space-around",
            paddingLeft: "17px",
            backgroundColor: "#fcf7ed",
          }}
        >
          {events.map((event) => (
            <div className="col-md-3 mb-4" key={event.eventId}>
              <div
                className="card h-100 d-flex flex-column position-relative product-card shadow-lg rounded hover-scale"
                onClick={() => handleCardClick(event)}
                style={{ transition: "transform 0.2s, box-shadow 0.2s" }}
              >
                {event.imageUrl && (
                  <img
                    src={event.imageUrl}
                    className="card-img-top"
                    alt={event.title}
                    style={{
                      objectFit: "cover",
                      height: "200px",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{ color: "#4d7a57" }}>
                    {event.title}
                  </h5>
                  <p className="card-text flex-grow-1" style={{ color: "#4d7a57" }}>
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Event Detail Modal */}
        {selectedEvent && (
          <div
            className="modal fade show d-block"
            tabIndex={-1}
            role="dialog"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div
              className="modal-dialog"
              role="document"
              style={{
                maxWidth: "800px",
                width: "100%",
                minWidth: "600px",
                margin: "auto",
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                minHeight: "400px",
              }}
            >
              <div
                className="modal-content"
                style={{ display: "flex", flexDirection: "row", minHeight: "400px" }}
              >
                <div style={{ width: "50%", overflow: "hidden" }}>
                  <img
                    src={selectedEvent.imageUrl}
                    alt={selectedEvent.title}
                    style={{ objectFit: "cover", height: "100%", width: "100%" }}
                  />
                </div>
                <div
                  className="modal-body"
                  style={{
                    padding: "20px",
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                  }}
                >
                  <div>
                    <h2
                      style={{
                        marginBottom: "10px",
                        wordWrap: "break-word",
                        color: "#4d7a57",
                      }}
                    >
                      {selectedEvent.title}
                    </h2>
                    {selectedEvent.isPrivate && (
                      <h6 style={{ color: "#4d7a57", marginBottom: "20px" }}>
                        Organizer: Private
                      </h6>
                    )}
                    <p style={{ color: "#4d7a57" }}>
                      {selectedEvent.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn"
                    style={{
                      alignSelf: "flex-start",
                      marginTop: "10px",
                      backgroundColor: "#4d7a57",
                      color: "white",
                    }}
                    onClick={() => alert("The organizer has been notified!")}
                  >
                    I am interested!
                  </button>
                  <button
                    type="button"
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      backgroundColor: "transparent",
                      border: "none",
                      fontSize: "24px",
                      cursor: "pointer",
                    }}
                    aria-label="Close"
                    onClick={closeEventModal}
                  >
                    &times;
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventListing;