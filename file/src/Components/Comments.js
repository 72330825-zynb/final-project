import { useEffect, useState } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import "../Style/Comments.css";

function Comments({ placeId }) {
  const [comments, setComments] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  //get
  useEffect(() => {
    axios.get(`http://localhost:5000/admin/comments/${placeId}`)
      .then(res => setComments(res.data))
      .catch(err => console.log(err));
  }, [placeId]);


//handle ll delete bl places
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/admin/comments/${id}`)
      .then(() => setComments(comments.filter(c => c.Comment_Id !== id)))
      .catch(err => console.log(err));
  };


//handle ll edit
  const handleEdit = (comment) => {
    setEditingId(comment.Comment_Id);
    setEditText(comment.Text);
  };



  //update 7ata syev ln3mlon edit 
  const saveEdit = () => {
    axios.put(`http://localhost:5000/admin/comments/${editingId}`, { Text: editText })
      .then(() => {
        setComments(
          comments.map(c =>
            c.Comment_Id === editingId ? { ...c, Text: editText } : c
          )
        );
        setEditingId(null);
        setEditText("");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="comments-container">
      {comments.map(comment => (
        <div className="comment-card" key={comment.Comment_Id}>
          {editingId === comment.Comment_Id ? (
            <div className="edit-section">
              <input
                className="edit-input"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <CheckIcon className="icon save-icon" onClick={saveEdit} />
            </div>
          ) : (
            <div className="comment-content">
              <p className="comment-text">{comment.Text}</p>
              <div className="comment-actions">
                <EditIcon className="icon edit-icon" onClick={() => handleEdit(comment)} />
                <DeleteIcon className="icon delete-icon" onClick={() => handleDelete(comment.Comment_Id)} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Comments;


