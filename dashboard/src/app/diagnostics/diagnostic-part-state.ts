/*
 * Copyright (c) 2015-2018 Red Hat, Inc.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */
/**
 * Defines the state of the diagnostic part
 * @author Florent Benoit
 */
export const enum DiagnosticPartState {
  READY,
  IN_PROGRESS,
  SUCCESS,
  FAILURE,
  ERROR
}
