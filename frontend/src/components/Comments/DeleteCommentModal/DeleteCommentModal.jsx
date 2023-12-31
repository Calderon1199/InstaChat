import { useDispatch, useSelector } from "react-redux";

import { deleteComment } from "../../../redux/comment";
import { useModal } from "../../../context/Modal";

import "./DeleteCommentModal.css";
import { getSinglePost } from "../../../redux/post";

function DeleteCommentModal({ comment }) {
    const dispatch = useDispatch();
    const post = useSelector(state => state.posts?.singlePost);
    const { closeModal } = useModal();

    const handleDelete = () => {
        dispatch(deleteComment(comment.id))
        .then(() => {
            dispatch(getSinglePost(post.id))
        })
        closeModal();
    }

    return (
        <>
            <div className="Delete-Post-Container">
                <h3>Are you sure you want to delete this comment?</h3>
                <div>
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={closeModal}>Cancel</button>
                </div>
            </div>
        </>
    );
}

export default DeleteCommentModal;
