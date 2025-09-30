<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grade Calculator Table</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      display: flex;
      justify-content: center;
      padding: 50px 0;
    }
    .container {
      background-color: #fff;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      max-width: 600px;
      width: 100%;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    th, td {
      border: 1px solid #ccc;
      padding: 10px;
      text-align: center;
    }
    th {
      background-color: #f0f0f0;
    }
    input[type="number"] {
      width: 60px;
      padding: 6px;
      border-radius: 6px;
      border: 1px solid #ccc;
      text-align: center;
    }
    button {
      margin-top: 20px;
      padding: 10px 20px;
      border: none;
      border-radius: 8px;
      background-color: #4CAF50;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }
    button:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Grade Calculator Table</h2>
    <table>
      <thead>
        <tr>
          <th>วิชา</th>
          <th>คะแนน</th>
          <th>เกรด</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Math</td>
          <td><input type="number" class="score" min="0" max="100"></td>
          <td class="grade"></td>
        </tr>
        <tr>
          <td>English</td>
          <td><input type="number" class="score" min="0" max="100"></td>
          <td class="grade"></td>
        </tr>
        <tr>
          <td>Science</td>
          <td><input type="number" class="score" min="0" max="100"></td>
          <td class="grade"></td>
        </tr>
      </tbody>
    </table>
    <button onclick="calculateGrades()">คำนวณเกรดทั้งหมด</button>
  </div>

  <script>
    function calculateGrade(score) {
      if (isNaN(score) || score < 0 || score > 100) {
        return 'ไม่ถูกต้อง';
      } else if (score >= 80) {
        return 'A';
      } else if (score >= 70) {
        return 'B';
      } else if (score >= 60) {
        return 'C';
      } else if (score >= 50) {
        return 'D';
      } else {
        return 'F';
      }
    }

    function calculateGrades() {
      const rows = document.querySelectorAll('tbody tr');
      rows.forEach(row => {
        const scoreInput = row.querySelector('.score');
        const gradeCell = row.querySelector('.grade');
        const score = parseFloat(scoreInput.value);
        gradeCell.textContent = calculateGrade(score);
      });
    }
  </script>
</body>
</html>
