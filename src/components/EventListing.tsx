import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css"; // AOS animations
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Switch,
  FormControlLabel,
  Tooltip,
  TextField,
  CircularProgress,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
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
  const [image, setImage] = useState<File | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Test events
  const initialEvents: Event[] = [
    {
      eventId: "1",
      title: "Community Rally",
      description: "Join us for a rally in support of local environmental initiatives.",
      imageUrl: "https://picsum.photos/seed/rally/400/300",
      isPrivate: false,
    },
    {
      eventId: "2",
      title: "Food Drive Extravaganza",
      description: "Help us collect food for the needy. Your donation can make a difference!",
      imageUrl: "https://picsum.photos/seed/fooddrive/400/300",
      isPrivate: false,
    },
    {
      eventId: "3",
      title: "Charity Marathon",
      description: "Run for a cause! Participate in our marathon to support community programs.",
      imageUrl: "https://picsum.photos/seed/marathon/400/300",
      isPrivate: true,
    },
    {
      eventId: "4",
      title: "Neighborhood Cleanup",
      description: "Gather together to clean and beautify our local parks and streets.",
      imageUrl: "https://picsum.photos/seed/cleanup/400/300",
      isPrivate: false,
    },
    {
      eventId: "5",
      title: "Book Donation Drive",
      description: "Donate books to help spread literacy in underprivileged communities.",
      imageUrl: "https://picsum.photos/seed/books/400/300",
      isPrivate: false,
    },
  ];

  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const imageUrl = image ? URL.createObjectURL(image) : "https://via.placeholder.com/400x300";

    const newEvent: Event = {
      eventId: Date.now().toString(),
      title,
      description,
      imageUrl,
      isPrivate,
    };

    setEvents([...events, newEvent]);
    setTitle("");
    setDescription("");
    setImage(null);
    setShowModal(false);
  };

  const handleCardClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const closeEventModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div style={{ width: "100%", backgroundColor: "#fcf7ed" }}>
      {/* Header */}
      <div className="container">
        <div className="row align-items-center mb-4" style={{ paddingTop: "60px" }}>
          <div className="col-md-10 text-center text-md-left">
            <h1 style={{ fontWeight: "bold", color: "#4d7a57" }}>Community Events</h1>
            <p style={{ color: "#4d7a57" }}>
              Explore local activism initiatives—from rallies to food drives
            </p>
          </div>
          <div className="col-md-2 text-md-right text-center ml-auto px-5">
            <Button
              variant="contained"
              onClick={() => setShowModal(true)}
              style={{
                backgroundColor: "#4d7a57",
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              +
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={showModal} onClose={() => setShowModal(false)} fullWidth maxWidth="md">
        <DialogTitle style={{ backgroundColor: "#4d7a57", color: "white", fontWeight: "bold", textAlign: "center" }}>
          Create a New Event
        </DialogTitle>
        <DialogContent style={{ padding: "30px" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <FormControlLabel
              control={<Switch checked={isPrivate} onChange={() => setIsPrivate(!isPrivate)} />}
              label="Keep Organizer Private"
            />
            <Tooltip title="If enabled, the organizer's identity won't be shown publicly." placement="top" arrow>
              <InfoIcon style={{ fontSize: "20px", color: "#888", marginLeft: "8px", cursor: "pointer" }} />
            </Tooltip>
          </div>
          <TextField
            fullWidth
            label="Event Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title of the event"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter a brief description"
            margin="normal"
            required
            disabled={isGenerating}
            InputProps={{
              endAdornment: isGenerating ? <CircularProgress size={20} /> : null,
            }}
          />
          <TextField
            fullWidth
            type="file"
            inputProps={{ accept: "image/*" }}
            onChange={handleImageChange}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setShowModal(false)} style={{ color: "#1B5E20" }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#2E7D32", color: "white" }}
            onClick={handleSubmit}
            disabled={isGenerating}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Render events */}
      <div
        className="row justify-content-around mt-5 d-flex flex-wrap"
        style={{ width: "100%", justifyContent: "space-around", paddingLeft: "17px", backgroundColor: "#fcf7ed" }}
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

      {selectedEvent && (
        <div className="modal fade show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
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
            <div className="modal-content" style={{ display: "flex", flexDirection: "row", minHeight: "400px" }}>
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
                  <h2 style={{ marginBottom: "10px", wordWrap: "break-word", color: "#4d7a57" }}>
                    {selectedEvent.title}
                  </h2>
                  {selectedEvent.isPrivate && (
                    <h6 style={{ color: "#4d7a57", marginBottom: "20px" }}>Organizer: Private</h6>
                  )}
                  <p style={{ color: "#4d7a57" }}>{selectedEvent.description}</p>
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
  );
};

export default EventListing;