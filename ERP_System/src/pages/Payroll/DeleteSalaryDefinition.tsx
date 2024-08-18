import { useDispatch } from "react-redux";
import { deleteSalary } from "../../redux/slices/salarySlice";
import { useNavigate, useParams } from "react-router-dom";

const DeleteSalaryDefinition = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await dispatch(deleteSalary(Number(id)) as any);
      navigate("/salary-breakdown");
    } catch (error) {
      console.error("Failed to delete salary:", error);
    }
  };

  return (
    <div className="w-[1148px] mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-[60px]">Delete Salary Definition</h2>
      <p>Are you sure you want to delete this salary definition?</p>
      <div className="mt-4 flex gap-4">
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
        >
          Delete
        </button>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteSalaryDefinition;
