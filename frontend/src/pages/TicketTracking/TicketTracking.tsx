import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./TicketTracking.css";

type TicketStatus = "Open" | "In Progress" | "Resolved";

type Ticket = {
  id: string;
  title: string;
  status: TicketStatus;
  priority: "Low" | "Medium" | "High";
  createdDate: string;
  lastUpdate: string;
  timeline: Array<{ label: string; time: string; done: boolean }>;
};

const TicketTracking = () => {
  const [searchParams] = useSearchParams();
  const [ticketId, setTicketId] = useState<string>(() => searchParams.get("ticketId") || "");

  const tickets = useMemo<Ticket[]>(
    () => [
      {
        id: "WHS-7421",
        title: "Application verification pending",
        status: "In Progress",
        priority: "High",
        createdDate: "2024-01-15",
        lastUpdate: "2024-01-16",
        timeline: [
          { label: "Ticket created", time: "Jan 15", done: true },
          { label: "Assigned to support", time: "Jan 16", done: true },
          { label: "Review in progress", time: "Now", done: false },
          { label: "Resolved", time: "TBD", done: false },
        ],
      },
      {
        id: "WHS-9002",
        title: "Password reset email not received",
        status: "Resolved",
        priority: "Medium",
        createdDate: "2024-02-03",
        lastUpdate: "2024-02-05",
        timeline: [
          { label: "Ticket created", time: "Feb 03", done: true },
          { label: "Investigated", time: "Feb 04", done: true },
          { label: "Resolved", time: "Feb 05", done: true },
          { label: "Closed", time: "—", done: true },
        ],
      },
      {
        id: "WHS-1110",
        title: "How to track my ticket?",
        status: "Open",
        priority: "Low",
        createdDate: "2024-03-01",
        lastUpdate: "2024-03-01",
        timeline: [
          { label: "Ticket created", time: "Mar 01", done: true },
          { label: "Waiting for assignment", time: "Now", done: false },
          { label: "Review in progress", time: "TBD", done: false },
          { label: "Resolved", time: "TBD", done: false },
        ],
      },
    ],
    []
  );

  const normalized = ticketId.trim().toUpperCase();
  const found = normalized
    ? tickets.find((t) => t.id.toUpperCase() === normalized)
    : null;

  const statusBadgeClass =
    found?.status === "Resolved"
      ? "status-resolved"
      : found?.status === "In Progress"
      ? "status-in-progress"
      : "status-open";

  return (
    <div className="ticket-tracking">
      <h1 className="tt-title">Track Support Ticket</h1>
      <p className="tt-subtitle">
        Enter your ticket ID to view status updates.
      </p>

      <div className="tt-form-card">
        <label className="tt-label">Ticket ID</label>
        <input
          className="tt-input"
          value={ticketId}
          onChange={(e) => setTicketId(e.target.value)}
          placeholder="e.g. WHS-7421"
        />
        <div className="tt-hint">
          Tip: try <span className="tt-code">WHS-7421</span>.
        </div>
      </div>

      {!normalized ? (
        <div className="tt-empty">
          Start by typing your ticket ID.
        </div>
      ) : !found ? (
        <div className="tt-empty">
          No ticket found for <span className="tt-code">{normalized}</span>.
        </div>
      ) : (
        <div className="tt-results">
          <div className="tt-result-header">
            <div>
              <div className="tt-ticket-id">{found.id}</div>
              <div className="tt-ticket-title">{found.title}</div>
              <div className="tt-meta">
                <span>Created: {found.createdDate}</span>
                <span>Last update: {found.lastUpdate}</span>
              </div>
            </div>
            <div className={`tt-status-badge ${statusBadgeClass}`}>
              {found.status}
            </div>
          </div>

          <div className="tt-grid">
            <div className="tt-timeline-card">
              <h2 className="tt-card-title">Progress</h2>
              <div className="tt-timeline">
                {found.timeline.map((step, idx) => (
                  <div key={idx} className="tt-step">
                    <div className={`tt-step-dot ${step.done ? "done" : "todo"}`} />
                    <div className="tt-step-body">
                      <div className="tt-step-label">{step.label}</div>
                      <div className="tt-step-time">{step.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="tt-support-card">
              <h2 className="tt-card-title">Need help?</h2>
              <p className="tt-support-text">
                If your ticket is urgent, open a new support request from the Help Center.
              </p>
              <div className="tt-support-actions">
                <a className="tt-link-button" href="/help">
                  Go to Help Center
                </a>
              </div>

              <div className="tt-priority">
                Priority: <strong>{found.priority}</strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketTracking;

