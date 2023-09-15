type Props = {
  className?: string
}

export const BuggerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="10" viewBox="0 0 32 10" fill="none">
    <rect width="32" height="2" rx="1" fill="#1B1D21" />
    <rect y="8" width="32" height="2" rx="1" fill="#1B1D21" />
  </svg>
);

export const DocumentIcon = ({ className }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none" className={className}>
    <path d="M12.7161 14.2234H5.49609" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.7161 10.0369H5.49609" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.25109 5.86008H5.49609" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M12.9085 0.749786C12.9085 0.749786 5.23149 0.753786 5.21949 0.753786C2.45949 0.770786 0.750488 2.58679 0.750488 5.35679V14.5528C0.750488 17.3368 2.47249 19.1598 5.25649 19.1598C5.25649 19.1598 12.9325 19.1568 12.9455 19.1568C15.7055 19.1398 17.4155 17.3228 17.4155 14.5528V5.35679C17.4155 2.57279 15.6925 0.749786 12.9085 0.749786Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
