import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SectionHeader from '../vote/shared/SectionHeader.js';

class AddWalletModal extends React.Component {
	state = {
		open: false,
	};

	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes } = this.props;

		return (
			<div>
				<Button className={classes.menuText} onClick={this.handleOpen}>
					Help
				</Button>
				<Modal
					aria-labelledby="modal-title"
					open={this.state.open}
					onClose={this.handleClose}
				>
					<Paper className={classes.modalContent}>
						<SectionHeader text="Help" id="modal-title" />
						<Typography>
							Please go to the #myfactomwallet channel on The Factoid
							Authority's{' '}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={'https://discord.gg/79kH2pp'}
							>
								Discord server
							</a>
							&nbsp;for support.
						</Typography>
						<br />
						<Typography>
							Ledger Nano X/S documentation can be found{' '}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={'http://help.myfactomwallet.com/'}
							>
								here
							</a>
							.
						</Typography>
						<br />
						<Typography>
							MyFactomWallet's Github repositories are{' '}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={'https://github.com/MyFactomWallet'}
							>
								here
							</a>
							.
						</Typography>
					</Paper>
				</Modal>
			</div>
		);
	}
}
AddWalletModal.propTypes = {
	classes: PropTypes.object.isRequired,
};

const styles = (theme) => ({
	modalContent: {
		position: 'absolute',
		boxShadow: theme.shadows[5],
		top: `50%`,
		left: `50%`,
		transform: `translate(-50%, -50%)`,
		minHeight: '138px',
		padding: '30px',
		maxWidth: '425px',
	},
	menuText: {
		color: 'white',
	},
});

export default withStyles(styles)(AddWalletModal);
