import React, { useState, useEffect } from 'react';
import { getQuizzes, getSurveys, getQuizReport, getSurveyReport } from '../services/reportService';

interface Report {
  id: string;
  title: string;
  type: 'quiz' | 'survey';
  createdAt: string;
}

const ViewReports: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [reportContent, setReportContent] = useState<string | null>(null);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    const quizzes = await getQuizzes();
    const surveys = await getSurveys();
    const allReports = [...quizzes, ...surveys].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    setReports(allReports);
  };

  const handleReportSelect = async (report: Report) => {
    setSelectedReport(report);
    setReportContent(null);
    
    try {
      const content = report.type === 'quiz' 
        ? await getQuizReport(report.id)
        : await getSurveyReport(report.id);
      setReportContent(content);
    } catch (error) {
      console.error('Error fetching report content:', error);
      setReportContent('Failed to load report content.');
    }
  };

  return (
    <div className="view-reports">
      <h2>View Reports</h2>
      <div className="reports-container">
        <div className="reports-list">
          <h3>Available Reports</h3>
          <ul>
            {reports.map(report => (
              <li key={report.id} onClick={() => handleReportSelect(report)}>
                {report.title} ({report.type})
              </li>
            ))}
          </ul>
        </div>
        <div className="report-content">
          {selectedReport ? (
            <>
              <h3>{selectedReport.title}</h3>
              {reportContent ? (
                <div dangerouslySetInnerHTML={{ __html: reportContent }} />
              ) : (
                <p>Loading report content...</p>
              )}
            </>
          ) : (
            <p>Select a report to view its content</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewReports;