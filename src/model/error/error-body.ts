import { ErrorMessage } from "./error-message";

export class ErrorBody {
  errorCode: string;
  errorSummary: string;
  errorLink: string;
  errorId: string;
  errorCauses: Array<ErrorMessage>
}



