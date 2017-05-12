export class Status {
  constructor(state = 0, total = 1) {
    this.message = 'Unknown status';
    this.state = state;
    this.total = total;
  }
}

export class PasswordDerivationStatus extends Status {
  constructor() {
    super();
    this.message = 'Password derivation';
  }
}

export class GetDerivationStatus extends Status {
  constructor() {
    super();
    this.message = 'Retrieve derivation parameters';
  }
}

export class GetUserStatus extends Status {
  constructor() {
    super();
    this.message = 'Get user encrypted datas';
  }
}

export class GetProtectKeyStatus extends Status {
  constructor() {
    super();
    this.message = 'Get encrypted protect key';
  }
}

export class ImportPublicKeyStatus extends Status {
  constructor() {
    super();
    this.message = 'Import public key';
  }
}

export class DecryptPrivateKeyStatus extends Status {
  constructor() {
    super();
    this.message = 'Decrypt private key';
  }
}

export class DecryptUserOptionsStatus extends Status {
  constructor() {
    super();
    this.message = 'Decrypt user options';
  }
}

export class DecryptMetadataStatus extends Status {
  constructor(state, total) {
    super(state, total);
    this.message = 'Decrypt metadata';
  }

  step() {
    this.state += 1;
  }
}

const Statuses = {
  Status,
  GetDerivationStatus,
  PasswordDerivationStatus,
  GetUserStatus,
  ImportPublicKeyStatus,
  DecryptPrivateKeyStatus,
  DecryptUserOptionsStatus,
  DecryptMetadataStatus,
  GetProtectKeyStatus,
};

export default Statuses;
