import {checkSchema, validationResult,Schema, CustomValidator } from 'express-validator';
import { Request, Response, NextFunction, RequestHandler } from 'express';

const isPositiveNumber: CustomValidator = (value) => {
  if (value > 0) {
    return true;
  }
  throw new Error('Value must be a positive number');
};

const magicMoverSchema: Schema = {
  weightLimit: {
    isNumeric: {
      errorMessage: 'Weight limit must be a number',
    },
    custom: {
      options: isPositiveNumber,
    },
  },
  energy: {
    isNumeric: {
      errorMessage: 'Energy must be a number',
    },
    custom: {
      options: isPositiveNumber,
    },
  },
  
};

export const validateMagicMover = [
  checkSchema(magicMoverSchema),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
] as RequestHandler[];
