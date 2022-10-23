import './Searchbar.scss';

const Searchbar = ({ searchId, handleInputChange, handleSubmit }) => {
  return (
    <div className="Seachbar">
      <input
        value={searchId}
        onChange={handleInputChange}
        // disabled={status === 'submitting'}
        type="text"
        id="missionIdInput"
        placeholder="Type ID here ..."
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Searchbar;
