import { useSelector } from "react-redux";
import { useState } from "react";
import { FaEdit, FaTrash, FaCheckCircle } from "react-icons/fa";

export default function StudentQueries() {
    const user = useSelector((store) => store.userInfo.value);
    const [queries, setQueries] = useState([]);
    const [subject, setSubject] = useState("");
    const [queryText, setQueryText] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    const handleAddQuery = () => {
        if (!subject || !queryText) return;

        const newQuery = {
            subject,
            queryText,
            resolved: false,
        };

        if (editIndex !== null) {
            const updated = [...queries];
            updated[editIndex] = newQuery;
            setQueries(updated);
            setEditIndex(null);
        } else {
            setQueries([newQuery, ...queries]);
        }

        setSubject("");
        setQueryText("");
    };

    const handleEdit = (index) => {
        const item = queries[index];
        setSubject(item.subject);
        setQueryText(item.queryText);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updated = queries.filter((_, i) => i !== index);
        setQueries(updated);
        setEditIndex(null);
    };

    return (
        <>

            {/* Form and Query List Section */}
            <section className="py-4 bg-light">
                <div className="container">
                    {/* Submit Form */}
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <div className="card shadow-sm">
                                <div className="card-header bg-primary text-white">
                                    <h5 className="mb-0">Submit a New Query</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Subject"
                                                value={subject}
                                                onChange={(e) => setSubject(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Your Query"
                                                value={queryText}
                                                onChange={(e) => setQueryText(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <button
                                        className={`btn mt-3 ${
                                            !subject || !queryText ? "btn-secondary disabled" : "btn-success"
                                        }`}
                                        onClick={handleAddQuery}
                                    >
                                        {editIndex !== null ? "Update Query" : "Submit Query"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Queries List */}
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="mb-3">Your Submitted Queries</h4>
                            {queries.length === 0 ? (
                                <p className="text-muted">No queries submitted yet.</p>
                            ) : (
                                queries.map((q, index) => (
                                    <div key={index} className="card mb-3 shadow-sm">
                                        <div className="card-body d-flex justify-content-between align-items-start flex-wrap">
                                            <div>
                                                <h5 className="card-title text-primary">{q.subject}</h5>
                                                <p className="card-text mb-1">{q.queryText}</p>
                                                <small className={`text-${q.resolved ? "success" : "warning"}`}>
                                                    <FaCheckCircle className="me-1" />
                                                    {q.resolved ? "Resolved" : "Pending"}
                                                </small>
                                            </div>
                                            <div className="mt-3 mt-md-0 d-flex gap-2">
                                                <button
                                                    className="btn btn-warning btn-sm"
                                                    onClick={() => handleEdit(index)}
                                                >
                                                    <FaEdit className="me-1" />
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => handleDelete(index)}
                                                >
                                                    <FaTrash className="me-1" />
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
