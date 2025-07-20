import { useState } from "react"
import { useFinancialRecords } from "../../contexts/financial-record-context";

export const FinancialRecordForm = () => {

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const {addRecord} = useFinancialRecords();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newRecord = {
      id: Date.now().toString(),
      date: new Date().toLocaleString('en-US'),
      description,
      amount: parseFloat(amount),
      category,
      paymentMethod
    };    

    addRecord(newRecord);
    setDescription("")
    setAmount("")
    setCategory("")
    setPaymentMethod("")

  };

  return <div className="form-container">
      <form onSubmit={handleSubmit}>
      <div className="form-field">
          <label>Description:</label>
          <input
            type="text"
            required
            className="input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Amount:</label>
          <input
            type="number"
            required
            className="input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Category:</label>
          <select
            required
            className="input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a Category</option>
            <option value="Recruitment">Recruitment</option>
            <option value="New Member Education">New Member Education</option>
            <option value="Finance & Fundraising">Finance & Fundraising</option>
            <option value="Siblinghood">Siblinghood</option>
            <option value="Philanthropy">Philanthropy</option>
            <option value="Marketing">Marketing</option>
            <option value="President">President</option>
          </select>
        </div>
        <div className="form-field">
          <label>Payment Method:</label>
          <select
            required
            className="input"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select a Payment Method</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Zelle">Zelle</option>
            <option value="Cash">Cash</option>
            <option value="Venmo">Venmo</option>
            <option value="Campus Groups">Campus Groups</option>
          </select>
        </div>
        <button type="submit" className="button">
          Add Record
        </button>
        </form>
  </div>;
}